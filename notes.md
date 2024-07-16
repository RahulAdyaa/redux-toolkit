Redux is a state management library for JavaScript applications. It helps you manage the state of your application in a predictable way. Redux is often used with React, but it can be used with any other JavaScript framework or library.

Key Principles of Redux
Single Source of Truth:

The state of your entire application is stored in a single JavaScript object called the store. This makes it easy to manage and debug the state.
State is Read-Only:

The only way to change the state is to emit an action, an object that describes what happened. This ensures that state mutations are predictable.
Changes are Made with Pure Functions:

To specify how the state tree is transformed by actions, you write pure reducers. Reducers are functions that take the previous state and an action, and return the next state.
Why Use Redux?
Predictable State Management:

By following strict rules for how the state can be updated, Redux makes it easier to understand how your application works and to debug issues when they arise.
Centralized State:

With a single state tree, you can easily manage and access the state from different parts of your application, making data flow more predictable and easier to reason about.
Time-Travel Debugging:

Redux DevTools allows you to inspect every state and action payload, go back in time to previous states, and even "hot reload" the state when you make changes to your reducers.
Middleware:

Redux middleware provides a way to interact with dispatched actions before they reach the reducer. This is useful for handling asynchronous actions, logging, error reporting, etc.



important

sabse pehle ek folder bananeynge APP naam se , usme ek file aayegi "store.js , usme configurestore import krenge and usko export krdenge

next step is to create reducers , or can say SLICES

naya folder banaya , features (be it todo feature , login feature etc.)

usme andar ek todo folder , uske andar ek file "todoSlice.js"

fir hmne import kiya createslice and nanoid method , nanoid method creates unique ids

fir hham initial state banaenge , which is an object , isko export krdia

fir SLICE banayenge , export const ke andar hi

context APi mein ham fucntion ki declaration likhre the definition nai likhre the 

but isme ham dono likhenge

reducers mein , method aur function aayenge 

like :  
reducers:{
    addTodo:(state, action)=>{}
    removeTodo:{}
}

abhi kitni states hain , uska hand to hand info state provide krta hai.

remove todo krne ke liye id to lagegi na , hawa mein se id to nahi aajayegi , to vohi id , action provide krta hai

abb addtodo mein ham ek naya function banayenge
aur usme same jo upar todo banay tha , uska array bhar denge, id mein nanoid(), aur text mein action.payload


abb ham addtodo , removetodo , updatetodo  kuch bhi add krskte hain

remove todo mein ham state.todos ko lenge aur usko overwrite krdenge

state.todos=state.todos.filter((todo)=>{todo.id!==action.payload})

updatetodo mein ham log find krenge jo ke agar id todo ki , action ke payload se match hoti hai , if ye then ham uska text change krdenge

const todo=state.todos((todo)=>{todo.id====ationa.payload})
 todo.text=action.payload

 abb reducers ko export kren ke 2 steps hain , sbse pehle to jo bhi functions banaye hain , unko export kro

 individual reducers ko export krna padega aur individual slices ko export krna padega

 abb configurestore wali file mein todoreducer ko bhi import krna hoga

 addtodo ke andar ek form banaya hai usko kuch tailwind ki properties di hain , ek onsubmit lagake eventhandler pass kiya hai as method jo aage define krenge

 addTodo ka syntax kese aayega 

 addTodo mtlb store ke andar uch add krna hai
 add DISPATCH se hota hai

 import {useDispatch} from 'react-redux'
 next wali line function ke andar. itna to pta hi hais
    const dispatch = useDispatch()

    abb addtodoHandler fucntion ki functionality likhenge
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dis
        }


dispatch reducer ko use krte hue store mein change krta hai

dispatch reducer ko use krte hue store mein value ko change krta hai


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
in main.jsx👆👆👆