// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllToDos } from './services/actions/todosActions';

// const Todos = () => {
//     const {isLoading, error, todos} = useSelector(state => state.todos);
    
//     const dispatch  = useDispatch();

//     useEffect(() =>{ 
//       dispatch(getAllToDos())
//     }, [dispatch])
//     return (
//         <div>
//             {isLoading &&  <h3> Loading....</h3>}
//             {error &&  <h3> {error}</h3>}
            
//             <section>
//                 {todos && todos.map(todo => {
//                     const {id, title } = todo;
//                     return (
//                         <article key={id}>
//                             <h3> {id}</h3>
//                             <h3> {title}</h3>
//                         </article>
//                     )
                        
                    
//                 })}
//             </section>
//         </div>
//     );
// };

// export default Todos;