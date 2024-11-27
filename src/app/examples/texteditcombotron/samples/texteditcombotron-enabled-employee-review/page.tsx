'use client'
import React, { useState } from 'react';
import '../employee-review/form.css';
import { AgentTypes, TextEditorComboTron } from '@revivesoft/inputron';
import {
  IconCheck,
  IconCopy,
} from '@tabler/icons-react';

const TextEditCombotronEmployeeReviewForm = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeEmail: '',
    performance: 'Excellent',
    reviewComments: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes from TextEditorComboTron
  const handleCommentsChange = (value: string | ((prevText: string) => string)) => {
    setFormData((prevData) => ({
      ...prevData,
      reviewComments: typeof value === 'string' ? value : value(prevData.reviewComments),
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Review Submitted:', formData);
    alert('Review Submitted! Check console for details.');
  };

  return (
    <div className="form-container flex flex-col w-full pt-4 py-2 space-y-4">
      <h2>Employee Performance Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            placeholder="Enter employee's name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeEmail">Employee Email</label>
          <input
            type="email"
            id="employeeEmail"
            name="employeeEmail"
            value={formData.employeeEmail}
            onChange={handleChange}
            placeholder="Enter employee's email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="performance">Performance Rating</label>
          <select
            id="performance"
            name="performance"
            value={formData.performance}
            onChange={handleChange}
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Satisfactory">Satisfactory</option>
            <option value="Needs Improvement">Needs Improvement</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reviewComments">Comments</label>
          <TextEditorComboTron
            id="reviewComments"
            name="reviewComments"
            value={formData.reviewComments}
            setTextValue={handleCommentsChange}
            placeholderText="Write comments here..."
            agentsIconsAlignment='top-center'
            containerStyle={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              width: "auto"
            }}
            labelConfig={{
              visible: false
            }}
            refreshButtonConfiguration={{ text: "Process", type: 'icon', alignment: 'top-right' }}
            undoButtonConfiguration={{ text: "Undo", type: 'icon', alignment: 'top-right' }}
            displayMode={{
              initialState: "Apply",
            }}
            triggerInterval={300}
            agentsConfig={[
              { name: 'Predict Agent', actionType: AgentTypes.predict, suggestionLabelVisibility: true, suggestionLabelTextOverride: 'Prediction'  },
              { name: 'Enhance Agent', actionType: AgentTypes.enhance, suggestionLabelVisibility: true, suggestionLabelTextOverride: 'Enhancement'  },
              { name: 'Feedback Agent', actionType: AgentTypes.feedback, suggestionApplyButtonVisibility: false, suggestionCopyButtonVisibility: false, suggestionLabelVisibility: true, suggestionLabelTextOverride: 'Feedback' },
              { name: 'Translate Agent', actionType: AgentTypes.translate, suggestionLabelVisibility: true, suggestionLabelTextOverride: 'Translation' },
            ]}
            activeAgent={AgentTypes.predict}
            suggestionConfig={{
              label: 'Suggestion',

              alignment: 'bottom',
              applyButtonConfig: {
                visible: true,
                icon: <IconCheck className='h-4 w-4'/>
              },
              copyButtonConfig: {
                visible: true,
                 icon: <IconCopy className='h-4 w-4'/>
              }
            }}
          />
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
    </div>
  );
};

export default TextEditCombotronEmployeeReviewForm;
