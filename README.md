## 웹사이트 링크 
https://todolist-jz45q6qub-seo0min.vercel.app/

### 컴포넌트 분리 
추가하기 버튼의 컴포넌트를 AddButton.jsx에 분리하였습니다. 
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
