// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import { AuthProvider } from "./context/AuthContext";
// import { ProtectedRoute } from "./routes";

// import HomePage from "./pages/HomePage";
// import RegisterPage from "./pages/RegisterPage";
// import { TaskFormPage } from "./pages/TaskFormPage";
// import { LoginPage } from "./pages/LoginPage";
// import { TasksPage } from "./pages/TasksPage";
// import { TaskProvider } from "./context/tasksContext";

// function App() {
//   return (
//     <AuthProvider>
//       <TaskProvider>
//         <BrowserRouter>
//           <main className="container content-container mx-auto px-10 md:px-0">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route element={<ProtectedRoute />}>
//                 <Route path="/tasks" element={<TasksPage />} />
//                 <Route path="/add-task" element={<TaskFormPage />} />
//                 <Route path="/tasks/:id" element={<TaskFormPage />} />
//                 <Route path="/profile" element={<h1>Profile</h1>} />
//               </Route>
//             </Routes>
//           </main>
//         </BrowserRouter>
//       </TaskProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import HomePage from "./pages/HomePage.jsx";
import TasksPage from "./pages/TasksPage.jsx"
import TaskFormPage from "./pages/TaskFormPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"


function App () {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route element={<ProtectedRoute/>}>
                        <Route path="/tasks" element={<TasksPage/>} />
                        <Route path="/add-task" element={<TaskFormPage/>} />
                        <Route path="/tasks/:id" element={<TaskFormPage/>} />
                        <Route path="/profile" element={<ProfilePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App