// src/pages/Admin.jsx
import React, { useState } from 'react';
import { modules } from '../data/modules';
import { questions } from '../data/questions';

const Admin = () => {
  const [newQuestion, setNewQuestion] = useState({
    id: '',
    moduleId: '',
    weekId: '',
    type: 'open-ended',
    question: '',
    correctAnswers: [],
    explanation: '',
  });

  const handleAddQuestion = () => {
    // Simulate saving to questions.js (replace with API/Firestore in production)
    questions.push({ ...newQuestion, correctAnswers: newQuestion.correctAnswers.split(',') });
    alert('Question added!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#4169E1] mb-4">Admin - Add Question</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Question ID"
          value={newQuestion.id}
          onChange={(e) => setNewQuestion({ ...newQuestion, id: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        />
        <select
          value={newQuestion.moduleId}
          onChange={(e) => setNewQuestion({ ...newQuestion, moduleId: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        >
          <option value="">Select Module</option>
          {modules.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Week ID"
          value={newQuestion.weekId}
          onChange={(e) => setNewQuestion({ ...newQuestion, weekId: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        />
        <select
          value={newQuestion.type}
          onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        >
          <option value="open-ended">Open-Ended</option>
          <option value="multiple-choice">Multiple Choice</option>
        </select>
        <textarea
          placeholder="Question (use $...$ for inline math, $$...$$ for block)"
          value={newQuestion.question}
          onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        />
        <input
          type="text"
          placeholder="Correct Answers (comma-separated)"
          value={newQuestion.correctAnswers}
          onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswers: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        />
        <textarea
          placeholder="Explanation"
          value={newQuestion.explanation}
          onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-200"
        />
        <button
          onClick={handleAddQuestion}
          className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-6 py-2 rounded-lg font-semibold"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default Admin;