import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <>
      <button className="p-2 bg-orange-400">Click me</button>
      <Button variant="outline">Button</Button>
      <div className="flex justify-center items-center flex-col gap-10">
      <Button variant="outline" size="sm">
        sm button
      </Button>
      <Button variant="destructive" size="lg">
        large button
      </Button>
      <Button variant="ghost" size="lg">
        ghost button
      </Button>
      <Button variant="link" size="lg">
        link button
      </Button>
    </div>
    </>
    </main>
    
    
  );
}
