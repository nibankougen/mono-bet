import { useRef, useCallback } from "react";
import {
    createConsumer, type Mixin
} from "@rails/actioncable"

const ACTION_CABLE_URL = "ws://localhost:3000/cable";
const consumer = createConsumer(ACTION_CABLE_URL);

type Subscription = ReturnType<typeof consumer.subscriptions.create> | null;

export const useActionCable = () => {
    const subscriptionRef = useRef<Subscription>(null);
    const gameIdRef = useRef<string | null>(null);

    const initGame = useCallback((roomId: string) => {
        if (!subscriptionRef.current) {
            subscriptionRef.current = consumer.subscriptions.create(
                { channel: "GameChannel", room_id: roomId },
                {
                    received(data: { type: string; message: string, game_id?: string }) {
                        console.log(data.message);

                        if (data.game_id) {
                            // Handle game-specific logic here
                            console.log(`Game ID: ${data.game_id}`);
                            gameIdRef.current = data.game_id;
                        }
                    },
                } as Mixin & Partial<Subscription>
            );
        }
        return subscriptionRef.current;
    }, []);

    const leaveGame = useCallback(() => {
        if (subscriptionRef.current) {
            subscriptionRef.current.unsubscribe();
            subscriptionRef.current = null;
        }
    }, []);

    const startGame = useCallback(() => {
        if (subscriptionRef.current) {
            subscriptionRef.current.perform("start_game", { room_id: "1" });
        }
    }, []);

    const bet = useCallback((userId: string) => {
        if (subscriptionRef.current) {
            subscriptionRef.current.perform("bet", {
                room_id: "1",
                game_id: gameIdRef.current,
                user_id: userId,
            });
        } else {
            console.warn("Subscription is not initialized.");
        }
    }, []);

    return {
        initGame,
        leaveGame,
        startGame,
        bet,
    };
};
