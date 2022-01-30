import React, { FC } from "react";

interface iCreatePersonProps {
  [key: string]: any;
}

type createPerson = {
  name: string;
  age: number;
  parents: {
    mather: string;
    father: string;
  };
};

export const CreatePerson: FC<iCreatePersonProps> = () => {
  const person = ({ name, age, parents }: createPerson) => {
    return {
      name,
      age,
      parents: {
        mather: parents.mather,
        father: parents.father,
      },
    };
  };

  return (
    <div>
      {JSON.stringify(
        person({
          name: "НИка",
          age: 7,
          parents: { mather: "Алла", father: "Саша" },
        })
      )}

      <div>
        Имя:{" "}
        {
          person({
            name: "НИка",
            age: 7,
            parents: { mather: "Алла", father: "Саша" },
          }).name
        }
        <div>
          Возрост:{" "}
          {
            person({
              name: "НИка",
              age: 7,
              parents: { mather: "Алла", father: "Саша" },
            }).name
          }
        </div>
      </div>

      <hr />

      {JSON.stringify(
        person({
          name: "Алла",
          age: 40,
          parents: { mather: "Лена", father: "Витя" },
        })
      )}
    </div>
  );
};
