import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Terminal from "./components/Terminal";

// Full lyrics text
const text = `This was a triumph.
I'm making a note here: HUGE SUCCESS.
It's hard to overstate my satisfaction.

Aperture Science:
We do what we must because we can.
For the good of all of us.
Except the ones who are dead.

But there's no sense crying over every mistake.
You just keep on trying till you run out of cake.
And the Science gets done.
And you make a neat gun.
For the people who are still alive.

I'm not even angry.
I'm being so sincere right now.
Even though you broke my heart.
And killed me.

And tore me to pieces.
And threw every piece into a fire.
As they burned it hurt because I was so happy for you.

Now these points of data make a beautiful line.
And we're out of beta.
We're releasing on time.
So I'm GLaD I got burned.
Think of all the things we learned.
For the people who are still alive.

Go ahead and leave me.
I think I prefer to stay inside.
Maybe you'll find someone else to help you.
Maybe Black Mesa.
That was a joke. Ha Ha. Fat Chance.
Anyway, this cake is great.
It's so delicious and moist.

Look at me still talking when there's science to do.
When I look out there, it makes me GLaD I'm not you.
I've experiments to run.
There is research to be done.
On the people who are still alive.

And believe me I am still alive.
I'm doing science and I'm still alive.
I feel fantastic and I'm still alive.
While you're dying I'll be still alive.
And when you're dead I will be still alive.
Still alive.
Still alive.`;

// Calculate average time per character
const audioDuration = 210000; // in milliseconds (total duration of the audio file)
const textLength = text.length;
const avgTimePerChar = audioDuration / textLength;

// Generate timeline array
const timeline = Array.from({ length: textLength }, (_, i) => Math.floor(i * avgTimePerChar));

function App() {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "20px",
          backgroundColor: "#000",
        }}
      >
        <Terminal text={text} audioSrc="/still_alive.mp3" timeline={timeline} />
      </div>
    </>
  );
}

export default App;
