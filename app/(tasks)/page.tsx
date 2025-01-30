import Hydrated from "../components/Hydrated";
import CountTask from "./CountTask";
import FilterTask from "./FilterTask";
import FormTask from "./FormTask";

export default function App() {
  return (
    <Hydrated>
      <div className="container lg:w-[45%] mx-auto shadow-2xl p-4 rounded-xl mt-10">
        <h2 className="text-3xl text-center font-bold my-5">Task Manager</h2>
        <FormTask />
        <FilterTask />
        <CountTask />
      </div>
    </Hydrated>
  );
}
