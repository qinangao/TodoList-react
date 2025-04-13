export default function Stats({ tasks }) {
  const numTasks = tasks.length;
  const numChecked = tasks.filter((task) => task.checked).length;
  const numUnchecked = numTasks - numChecked;

  return (
    <div>
      <h2>
        {numTasks === 0
          ? "😴 No tasks yet! Time to plan something awesome 🗓️🌟"
          : numUnchecked === 0
          ? "Congrats! You finished all the tasks — well done! 🎉✅🙌"
          : `You are ${Math.round(
              (numChecked / numTasks) * 100
            )}% through your ${numTasks} ${
              numUnchecked === 1 ? "task" : "tasks"
            }! Onward, productivity hero! 🦸‍♂️✨`}
      </h2>
    </div>
  );
}
