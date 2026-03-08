const db = require('../config/db');

exports.getByUserAndLesson = (userId, lessonId) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM lesson_progress WHERE user_id = ? AND lesson_id = ?`,
            [userId, lessonId],
            (err, row) => err ? reject(err) : resolve(row || null)
        );
    });
};

exports.markComplete = (userId, lessonId) => {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO lesson_progress (user_id, lesson_id, is_completed, completed_at)
             VALUES (?, ?, 1, CURRENT_TIMESTAMP)
             ON CONFLICT(user_id, lesson_id)
             DO UPDATE SET is_completed = 1, completed_at = CURRENT_TIMESTAMP`,
            [userId, lessonId],
            (err) => err ? reject(err) : resolve()
        );
    });
};

exports.markIncomplete = (userId, lessonId) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE lesson_progress SET is_completed = 0, completed_at = NULL
             WHERE user_id = ? AND lesson_id = ?`,
            [userId, lessonId],
            (err) => err ? reject(err) : resolve()
        );
    });
};

exports.getCourseProgress = (userId, courseId) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM course_progress_view WHERE user_id = ? AND course_id = ?`,
            [userId, courseId],
            (err, row) => err ? reject(err) : resolve(row || null)
        );
    });
};