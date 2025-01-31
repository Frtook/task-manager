import CountTask from "./CountTask";
import FilterTask from "./FilterTask";
import FormTask from "./FormTask";

export default function App() {
  return (
    <div className="w-[95%] lg:w-[45%] mx-auto dark:shadow-white dark:shadow-sm  shadow-2xl p-4 rounded-xl mt-10">
      <h2 className="text-3xl text-center font-bold my-5">Tasks</h2>
      <FormTask />
      <FilterTask />
      <CountTask />
    </div>
  );
}
