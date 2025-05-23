new Vue({
  el: '#app',
  data() {
    return {
      //データの準備
      todos: [],
      text:''
    };
  },
  methods: {
    //inputTextメソッドを追加
inputText(e){
  this.text=e.target.value;
},
    //addTodoメソッドを追加
addTodo(){
  if(!this.text)return;

  const text = this.text;
  const id = Math.ceil(Math.random() * 1000);
  const todo={
    id,
    text,
    isDone: false
  };
  this.todos.push(todo);
  this.resetText();
  
},
    //resetTextメソッドを追加
    resetText(){
      this.text = '';
    },
    deleteTodo(id){
      const index = this.getIndexBy(id);
      this.todos.splice(index,1);
    },
    toggleIsDone(id){
      const index = this.getIndexBy(id);
      this.todos[index].isDone = !this.todos[index].isDone;
    },
    getIndexBy(id){
      const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
      const index = this.todos.indexOf(filteredTodo);
      return index;
    }
  },
  computed:{
    doneTodo(){
      return this.todos.filter( todo=> todo.idDone===true);
    },
    incompleteTodo(){
      return this.todos.filter( todo=> todo.isDome ===folse);
    }
  }
});