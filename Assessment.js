import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    title: "React Basics",
    questions: [
      {
        question: "What is JSX?",
        options: ["JavaScript XML", "Java Source X", "JSON Syntax Extension", "JavaScript Extension"],
        answer: "JavaScript XML"
      },
      {
        question: "Which hook is used for state management in React?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useState"
      },
      {
        question: "How do you create a React component?",
        options: ["function", "class", "both", "none"],
        answer: "both"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    questions: [
      {
        question: "What is a closure in JavaScript?",
        options: ["Function inside a function", "Loop variable", "If-else block", "DOM event"],
        answer: "Function inside a function"
      },
      {
        question: "Which keyword is used to define constants?",
        options: ["let", "const", "var", "define"],
        answer: "const"
      },
      {
        question: "What is 'this' keyword?",
        options: ["Global variable", "Current object", "Next element", "None"],
        answer: "Current object"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=SBwoFkRjZvE"
  },
  {
    id: 3,
    title: "UI/UX Design",
    questions: [
      {
        question: "What does UX stand for?",
        options: ["User Xperience", "Ultimate Experience", "User Experience", "Unified Experience"],
        answer: "User Experience"
      },
      {
        question: "Which tool is used for UI prototyping?",
        options: ["Figma", "VS Code", "MongoDB", "Node.js"],
        answer: "Figma"
      },
      {
        question: "Which color mode is best for accessibility?",
        options: ["RGB", "High contrast", "Monochrome", "Neon"],
        answer: "High contrast"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=_QYJ5fdU5bA"
  },
  {
    id: 4,
    title: "Data Structures",
    questions: [
      {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Array", "Stack", "Tree"],
        answer: "Stack"
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)"
      },
      {
        question: "Which structure is hierarchical?",
        options: ["Array", "Linked List", "Tree", "Stack"],
        answer: "Tree"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=RBSGKlAvoiM"
  },
  {
    id: 5,
    title: "Machine Learning",
    questions: [
      {
        question: "Which algorithm is used for classification?",
        options: ["KNN", "K-Means", "Linear Regression", "Bubble Sort"],
        answer: "KNN"
      },
      {
        question: "What does supervised learning mean?",
        options: ["No labels", "With labels", "Random data", "Unsorted data"],
        answer: "With labels"
      },
      {
        question: "Which is a performance metric for regression?",
        options: ["Accuracy", "Precision", "MSE", "Recall"],
        answer: "MSE"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=GwIo3gDZCVQ"
  },
  {
    id: 6,
    title: "Web Development",
    questions: [
      {
        question: "What is the purpose of HTML?",
        options: ["Styling", "Structure", "Logic", "Data fetching"],
        answer: "Structure"
      },
      {
        question: "Which is used for backend?",
        options: ["React", "CSS", "Node.js", "HTML"],
        answer: "Node.js"
      },
      {
        question: "What does CSS stand for?",
        options: ["Color Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Syntax"],
        answer: "Cascading Style Sheets"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=UB1O30fR-EE"
  },
  {
    id: 7,
    title: "Cloud Computing",
    questions: [
      {
        question: "What is IaaS?",
        options: ["Internet as a Service", "Infrastructure as a Service", "Interface as a Service", "Image as a Service"],
        answer: "Infrastructure as a Service"
      },
      {
        question: "Which platform is a cloud provider?",
        options: ["AWS", "Windows", "Ubuntu", "Slack"],
        answer: "AWS"
      },
      {
        question: "What does 'scalability' mean in cloud?",
        options: ["Changing code", "Increasing capacity", "Moving files", "Encrypting data"],
        answer: "Increasing capacity"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=2LaAJq1lB1Q"
  },
  {
    id: 8,
    title: "Cybersecurity",
    questions: [
      {
        question: "What is phishing?",
        options: ["Hacking system", "Email scam", "Coding virus", "Firewall"],
        answer: "Email scam"
      },
      {
        question: "Which is NOT a security principle?",
        options: ["Confidentiality", "Integrity", "Availability", "Simplicity"],
        answer: "Simplicity"
      },
      {
        question: "What does SSL stand for?",
        options: ["Secure Socket Layer", "Simple Secure Login", "Secure Service Line", "System Security Layer"],
        answer: "Secure Socket Layer"
      }
    ],
    youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA"
  }
];

export default function Assessment() {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = courseData.find(c => c.id === courseId);

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === course.questions[currentQ].answer) {
      setScore(score + 1);
    }
    if (currentQ + 1 < course.questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="page-container">
      <h2>{course.title} - Assessment</h2>
      <a
        href={course.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="learn-button"
      >
        📺 Learn (YouTube)
      </a>

      {!finished ? (
        <>
          <h3>{course.questions[currentQ].question}</h3>
          <ul>
            {course.questions[currentQ].options.map((opt, idx) => (
              <li key={idx} onClick={() => handleAnswer(opt)}>{opt}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <h3>Your Score: {score} / {course.questions.length}</h3>
          <p>Thank you for completing the assessment!</p>
        </div>
      )}
    </div>
  );
}
<div className="result-summary">
  <h3>Your Score: 8/10</h3>
  <div className="progress-bar">
    <div style={{ width: '80%' }} className="filled-bar"></div>
  </div>
</div>
