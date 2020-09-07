import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
            {
              'id': 1,
              'image': 'https://placeimg.com/64/64/1',
              'name':'홍길동',
              'birthday' : '961222',
              'gender' :  '남자' ,
              'job' : '대학생'
            }
            ,
            {
              'id': 2,
              'image': 'https://placeimg.com/64/64/2',
              'name':'이순신',
              'birthday' : '200101',
              'gender' :  '남자' ,
              'job' : '사무직'
            }
            ,
            {
              'id': 3,
              'image': 'https://placeimg.com/64/64/3',
              'name':'김철수',
              'birthday' : '041202',
              'gender' :  '남자' ,
              'job' : '개발자'
            }
            ,
            {
              'id': 4,
              'image': 'https://placeimg.com/64/64/4',
              'name':'이영희',
              'birthday' : '041202',
              'gender' :  '여자' ,
              'job' : '개발자'
            }
]

function App() {

  return (
  <div>
    {
       customers.map(c =>{
                                  return(
                                    <Customer
                                      key={c.id}   // key 필수로 넣어야 함 (시퀀스)
                                      id={c.id}
                                      image={c.image}
                                      name={c.name}
                                      birthday={c.birthday}
                                      gender={c.gender}
                                      job={c.job}
                                    />
                              
                                  )
                           }
                     )
    }
   </div>
  )
  }

export default App;
