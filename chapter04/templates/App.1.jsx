function App() {
  return (
    <div className="text-center">
      <h1 className="text-white bg-red-600 p-5 text-center text-3xl">
        天気予報
      </h1>
      <div className="mx-auto my-5 w-2/3 p-5 bg-rose-200 text-lg rounded-2xl border-4 border-pink-400">
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </div>
    </div>
  );
}

export default App;
