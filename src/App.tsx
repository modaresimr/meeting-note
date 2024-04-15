import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center'>
                    Meeting Note
                </h1>
                
                <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                    Free and Offline meeting note extractor in your browser. No data send to any server.
                </h2>
                
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
                <div className='bottom-4'>
                Made with{" "}
                <a
                    className='underline'
                    href='https://github.com/xenova/transformers.js'
                >
                    🤗 Transformers.js
                </a>. Forked from <a href="https://github.com/xenova/whisper-web">Whisper Web</a>. By <a href="https://github.com/modaresimr/">Ali Modaresi</a>
            </div>
            </div>


        </div>
    );
}

export default App;
