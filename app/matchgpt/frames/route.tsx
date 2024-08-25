/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";


const totalPages = 5;

const frames = createFrames({
  basePath: "/matchgpt/frames",
});

const handleRequest = frames(async (ctx) => {
  const pageIndex = Number(ctx.searchParams.pageIndex || 0);

  const imageUrl = 'https://cdn.discordapp.com/attachments/1276616589977976976/1277255225786503260/ffdsfs.png?ex=66cc8020&is=66cb2ea0&hm=de7cee3cd59e7927f2646e52aa4a5f7a8acb36dc9b0ad536e60f39ea6601a906&';

  return {
    image: (
      <div tw="flex flex-col">
        <img width={1100} height={605} src={imageUrl} alt="Image" />
        <div tw="flex">
         {/* Vote for your favorite team */}
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{
          query: { pageIndex: (pageIndex - 1) % totalPages },
        }}
      >
        Team 1
      </Button>,
      <Button
        action="post"
        target={{
          query: { pageIndex: (pageIndex + 1) % totalPages },
        }}
      >
        Team 2
      </Button>,
      <Button
      action="post"
      target={{
        query: { pageIndex: (pageIndex + 1) % totalPages },
      }}
    >
      Team 3
    </Button>,
    <Button
    action="post"
    target={{
      query: { pageIndex: (pageIndex + 1) % totalPages },
    }}
  >
    Team 4
  </Button>,
    ],
  
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
