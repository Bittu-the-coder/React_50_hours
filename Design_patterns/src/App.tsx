import { useState } from "react";
import Modal from "./components/compoundComponents/Modal";
import MouseTracker from "./components/RenderProps/MouseTracker";
import User from "./components/RenderProps/User";

const App = () => {
  // const [todos, setTodos] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
  //     setTodos(response.data);
  //     setLoading(false);
  //   });
  // }, []);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // return (
  //   <>
  //     {/* <MouseTracker
  //       render={(position) => {
  //         return (
  //           <div className="w-full h-full flex items-center justify-center">
  //             <h1 className="text-2xl font-bold">
  //               Mouse Position: {position.x}, {position.y}
  //             </h1>
  //           </div>
  //         );
  //       }}
  //     /> */}
  //     {/* Uncomment the following lines to use the Modal component */}

  //     {/* <div>
  //       <button
  //         onClick={openModal}
  //         className="px-4 py-2 bg-green-400 text-white rounded-md"
  //       >
  //         Open Modal
  //       </button>

  //       {isModalOpen && (
  //         <Modal>
  //           <Modal.Title>Modal Title</Modal.Title>
  //           <Modal.Body>This is the body of the modal.</Modal.Body>
  //           <Modal.Footer>
  //             <button
  //               onClick={closeModal}
  //               className="px-4 py-2 text-white bg-gray-500 rounded-md text-sm"
  //             >
  //               Cancel
  //             </button>
  //             <button
  //               onClick={closeModal}
  //               className="px-4 py-2 text-white bg-teal-500 ml-[0.3rem] rounded-md text-sm"
  //             >
  //               Confirm
  //             </button>
  //           </Modal.Footer>
  //         </Modal>
  //       )}
  //     </div> */}
  //     {/* <CardFactory
  //       type="profile"
  //       username="JohnDoe"
  //       bio="Software Engineer"
  //       profilePic="https://via.placeholder.com/150"
  //     />
  //     <CardFactory
  //       type="post"
  //       title="My First Post"
  //       content="This is the content of my first post."
  //       author="JohnDoe"
  //     /> */}
  //     {/* <ButtonFactory type="danger" label="Primary Button" /> */}
  //     {/* <ThemeUse /> */}
  //     {/* <FormUse /> */}
  //     {/* <FetchComponent /> */}
  //     {/* <TodoWithLoading isLoading={loading} data={todos} /> */}
  //     {/* <TodoListWrapper one={1} two={2} three={3}>
  //       <TodoLIst />
  //     </TodoListWrapper> */}
  //     {/* <UncontrolledForm />
  //     <ControlledForm /> */}
  //     {/* <ErrorBoundary>
  //       <SingleTodoLoader>
  //         <Todos />
  //       </SingleTodoLoader>
  //       <ResourceLoader resourceUrl="comments" resourceName="comments">
  //         <CommentsList />
  //       </ResourceLoader>
  //     </ErrorBoundary> */}
  //     {/* <Modal>
  //       <RenderList
  //         data={movies}
  //         resourceName="movie"
  //         dataToRender={({ movie }) => <MoviesInfo {...movie} />}
  //       />
  //     </Modal> */}
  //     {/* <RenderList
  //       data={movies}
  //       resourceName="movie"
  //       dataToRender={({ movie }) => <MoviesInfo {...movie} />}
  //     />
  //     <RenderList
  //       data={games}
  //       resourceName="game"
  //       dataToRender={({ game }) => <GamesInfo {...game} />}
  //     /> */}
  //     {/* <Content /> */}
  //     {/* <SplitScreen leftWeight={15} rightWeight={80}>
  //       <Left />
  //       <Right />
  //     </SplitScreen> */}
  //   </>
  // );

  return (
    <>
      <h1>Test</h1>
      <User />
    </>
  );
};

export default App;
