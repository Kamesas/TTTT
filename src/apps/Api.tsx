import React, { FC, useEffect, useState } from "react";

interface iApiProps {
  [key: string]: any;
}

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const Api: FC<iApiProps> = () => {
  const [results, setResults] = useState();
  const [todos, setTodos] = useState<Array<Todo>>();

  console.log("todos", todos);

  useEffect(() => {
    getTodos().then(async (res) => {
      const list = res.slice(0, 10);

      // list.forEach(async (todo) => {
      //   const odd = todo.id % 2 && (await getOddTodo(todo.id));
      //   odd && console.log("odd", odd.id);

      //   odd && setTodos((prev) => (prev ? [...prev, odd] : [todo]));
      // });

      for (const todo in list) {
        const odd = list[todo].id % 2 && (await getOddTodo(list[todo].id));
        odd && console.log("odd", odd.id);

        odd && setTodos((prev) => (prev ? [...prev, odd] : [list[todo]]));
      }

      // for (const todo of list) {
      //   const odd = todo.id % 2 && (await getOddTodo(todo.id));
      //   odd && console.log("odd", odd.id);

      //   odd && setTodos((prev) => (prev ? [...prev, odd] : [todo]));
      // }

      // (async () => {
      //   for (const todo of list) {
      //     const odd = todo.id % 2 && (await getOddTodo(todo.id));
      //     odd && console.log("odd", odd.id);

      //     odd && setTodos((prev) => (prev ? [...prev, odd] : [todo]));
      //   }
      // })();

      // (async function () {
      //   for (const todo of list) {
      //     const odd = todo.id % 2 && (await getOddTodo(todo.id));
      //     console.log("odd", odd ? odd.id : null);

      //     odd && setTodos((prev) => (prev ? [...prev, odd] : [todo]));
      //   }
      // })();

      // for (const todo of list) {
      //   setTodos((prev) => (prev ? [...prev, todo] : [todo]));
      // }

      // list.forEach((todo) => {
      //   setTodos((prev) => (prev ? [...prev, todo] : [todo]));
      // });
    });
  }, []);

  const getTodos = async (): Promise<Array<Todo>> => {
    return await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );
  };

  const getOddTodo = async (id: number): Promise<Todo> => {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (response) => response.json()
    );
  };

  return (
    <div>
      <h1>Test api</h1>
    </div>
  );
};
