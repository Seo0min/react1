import React from 'react';

const AddButton = ({ plans, title, body, setPlans, setTitle, setBody }) => {
  const clickAddButtonHandler = () => {
    alert('추가되었습니다!!');
    const newPlan = {
      id: plans.length + 1,
      title,
      body,
      isDone: false,
    };

    setPlans([...plans, newPlan]);
    setTitle('');
    setBody('');
  };

  return (
    <button className="add-button" onClick={clickAddButtonHandler}>
      추가하기
    </button>
  );
};

export default AddButton;
