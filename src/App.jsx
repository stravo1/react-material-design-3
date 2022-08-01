import Button from "./components/buttons/button";

function App() {
	return (
		<div className="w-screen h-screen bg-neutral-900 p-12">
			<div className="w-full bg-neutral-50 p-8 rounded-2xl">
				<div className="font-bold text-lg p-2">Common buttons: </div>
				<div className="flex overflow-auto">
					<Button type={"elevated"} text={"Elevated"} icon={"widgets"} />{" "}
					<Button type={"filled"} text={"Filled"} icon={"add"} />{" "}
					<Button type={"filledTonal"} text={"Filled Tonal"} />{" "}
					<Button type={"outline"} text={"Outline"} />{" "}
					<Button type={"text"} text={"Text"}/>{" "}
				</div>
				<br />
			</div>
		</div>
	);
}

export default App;
