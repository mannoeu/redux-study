import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./styles";

function CourseList() {
  const courses = useSelector((state) => state.courses.data);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* Action Creator */
  function addCourseAction(title, description) {
    return { type: "ADD_COURSE", payload: { title, description } };
  }

  function removeCourseAction(id) {
    return { type: "REMOVE_COURSE", payload: id };
  }

  function addCourse(event) {
    event.preventDefault();

    if (!title || !description) {
      alert("Preencha todos os campos");
      return;
    }

    /* Dispatch */
    dispatch(addCourseAction(title, description));

    setTitle("");
    setDescription("");
  }

  function removeCourse(id) {
    dispatch(removeCourseAction(id));
  }

  return (
    <>
      <S.Form onSubmit={addCourse}>
        <fieldset>
          <legend>Adicionar Curso</legend>
          <S.Field>
            <label htmlFor="title">Título</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              placeholder="Título do curso..."
            />
          </S.Field>
          <S.Field>
            <label htmlFor="description">Descrição</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              id="description"
              name="description"
              placeholder="Descrição do curso..."
            />
          </S.Field>
          <S.Button>Salvar</S.Button>
        </fieldset>
      </S.Form>
      <S.Container>
        {courses.map((course) => (
          <S.Card key={course.id}>
            <S.DeleteButton onClick={() => removeCourse(course.id)} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </S.Card>
        ))}
      </S.Container>
    </>
  );
}

export default CourseList;
