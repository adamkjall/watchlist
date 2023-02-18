const Spinner = () => {
  return (
    <div className="h-full flex items-center justify-center space-x-2">
      <div className="w-8 h-8 rounded-full animate-pulse dark:bg-violet-400"></div>
      <div className="w-8 h-8 rounded-full animate-pulse dark:bg-violet-400"></div>
      <div className="w-8 h-8 rounded-full animate-pulse dark:bg-violet-400"></div>
    </div>
  );
};

export default Spinner;
