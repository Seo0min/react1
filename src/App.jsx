import React, {useState} from 'react';
import './App.css';
import AddButton from './components/AddButton';

const App = () => { 
  const [plans, setPlans] = useState([
    {id: 0, title: '독서 하기', body: '한 달에 한 권', isDone: false},
    {id: 1, title: '과제 끝내기', body: '8/27까지', isDone: true}
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  
  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  
  const cancelDoneButtonHandler = (id) => {
    const updatedPlans = plans.map((plan) => 
    plan.id === id ? {...plan, isDone: !plan.isDone} : plan
    );
    setPlans(updatedPlans);
  };

  const clickDeleteButtonHandler = (id) => {
    const newPlans = plans.filter((plan) => plan.id !== id);
    setPlans(newPlans);
  };

  return (
    <div className = 'main'>
    <nav>
      <div>My Todo List</div>
      <div>React</div>
    </nav>

    <div className='content-input'>
      <div>
        제목 &nbsp;
        <input 
          type = 'text' 
          value = {title} 
          onChange = {onTitleChangeHandler}
        />
          {/* state 연결 확인 시 {title} */}

        &nbsp;내용 &nbsp;
        <input 
          type = 'text' 
          value = {body} 
          onChange = {onBodyChangeHandler}
        />
      </div>
      <div>
        <AddButton
          plans={plans}
          title={title}
          body={body}
          setPlans={setPlans}
          setTitle={setTitle}
          setBody={setBody}
        />
      </div>
    </div>
    <div>
    <div className = 'group'>Working.. 🔥</div>
    <div className='plans-container'>
    {
      plans.map((item) => {
        if(!item.isDone) {
        return (
          <div key = {item.id} className='working-content'>
            <h3>{item.title}</h3><br/>
            {item.body}<br/>
            <button className = 'd-button' onClick={() => clickDeleteButtonHandler(item.id)}>삭제</button>
            <button className = 'c-button' onClick={() => cancelDoneButtonHandler(item.id)}>{item.isDone ? "취소":"완료"}</button>
          </div>
        );
        } else {
          return null;
        }
      })
    }
    </div>
    <div className = 'group'>Done..! 🎉</div>
    <div className='plans-container'>
    {
      plans.map((item) => {
        if(item.isDone) {
        return (
          <div key = {item.id} className='done-content'>
            <h3>{item.title}</h3><br/>
            {item.body}<br/>    
            <button className = 'd-button' onClick={() => clickDeleteButtonHandler(item.id)}>삭제</button>
            <button className = 'c-button' onClick={() => cancelDoneButtonHandler(item.id)}>{item.isDone ? "취소":"완료"}</button>
          </div>
          );
        } else {
          return null;
        }
      })
    }
    </div>
    </div>
    </div>
  );
};

export default App