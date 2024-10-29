import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Chat } from "../../bottom-bar";
import { Dispatch, SetStateAction } from "react";
import Spinner from "@/components/ui/spinner";
import ChatAICommands from "../chat-ai-commands";

interface AIChatContentProps {
  chat: Chat[];
  open: boolean;
  setChat: Dispatch<SetStateAction<Chat[]>>;
  chatHistoryLoading: boolean;
  chatSelection: string;
  onUserSelectCommand: (option: string) => void;
}

const AIChatContent: React.FC<AIChatContentProps> = ({
  chat,
  open,
  chatHistoryLoading,
  chatSelection,
  onUserSelectCommand,
}) => {
  const { user } = useUser();

  return (
    <div
      className={cn(
        "h-0 -translate-y-16 mt-4 bg-foreground relative flex  space-y-6 w-full rounded-3xl left-2 transition-all duration-500 ease-in-out py-6 px-6 pr-2",
        open && "h-[86.5vh] translate-y-0"
      )}
    >
      {chatSelection === "single" && !chatHistoryLoading && (
        <ChatAICommands onSelect={onUserSelectCommand} />
      )}
      {chatHistoryLoading ? (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      ) : (
        <ScrollArea className="max-h-full pr-6 w-full">
          <div
            className={cn(
              "hidden space-y-6 h-full",
              open && "block opacity-100"
            )}
          >
            {chat.length === 0 || chat === undefined ? (
              <div className="text-center font-semibold text-white flex flex-col items-center justify-center -mt-6 h-full">
                <span className="text-[96px]">😢</span>
                <span className="text-xl text-white/30 font-semibold">
                  There is no chat history. <br />
                  Start chat right now!
                </span>
                <span className="text-[32px]">🪄</span>
              </div>
            ) : (
              chat.map((chatItem: Chat, _idx: number) =>
                chatItem.role === "user" ? (
                  <div className="flex space-x-2 w-2/3 ml-auto" key={_idx}>
                    <div className="bg-background rounded-xl p-2 max-w-[420px] ml-auto h-auto">
                      {chatItem.parts.map((message, i) => (
                        <span
                          key={i}
                          className="text-white text-sm leading-6 text-pretty"
                        >
                          {message}
                        </span>
                      ))}
                    </div>
                    <Avatar className="border-2 border-gray-700">
                      <AvatarImage src={user?.imageUrl} />
                      <AvatarFallback className="w-full grid place-items-center bg-background text-white/30 text-md">
                        U
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <div className="flex space-x-2 w-2/3 mr-auto" key={_idx}>
                    <Avatar className="border-2 border-blue-600 ">
                      <AvatarImage src="#" />
                      <AvatarFallback className="w-full grid place-items-center bg-background text-white/30 text-md">
                        M
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-blue-600 rounded-xl p-2">
                      {chatItem.parts.map((message: string, i) => (
                        <span key={i} className="text-white text-sm leading-6">
                          {message}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )
            )}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      )}
    </div>
  );
};

export default AIChatContent;