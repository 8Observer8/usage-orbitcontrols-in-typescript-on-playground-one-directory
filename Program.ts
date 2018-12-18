import { Scene } from "./Scene";

// Playground: https://plnkr.co/edit/yICv96E7lTK8xu7DohJB?p=preview

class Program
{
    public static Main()
    {
        let scene = new Scene();
        scene.Init();
        scene.Animate();
    }
}
Program.Main();