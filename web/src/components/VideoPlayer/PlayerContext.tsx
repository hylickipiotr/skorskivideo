import {
  Consumer,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface PlayerContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PlayerContextProps {
  isOpen: boolean;
}

interface PlayerProviderProps {
  children: ReactNode;
  value: PlayerContextProps;
}

export const PlayerContext = createContext<PlayerContext | undefined>(
  undefined
);

export const usePlayerContext = () => {
  const player = useContext(PlayerContext);
  if (!player) {
    throw new Error(
      "PlayerContext is undefined. Set the 'value' prop in PlayerProvider."
    );
  }
  return player;
};

export const PlayerProvider: React.FC<PlayerProviderProps> = ({
  children,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(value.isOpen);
  return (
    <PlayerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const PlayerConsumer = PlayerContext.Consumer as Consumer<PlayerContext>;
