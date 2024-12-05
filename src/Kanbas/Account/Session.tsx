import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        let currentUser;
        
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));

        } catch (err: any) {
            console.error('Error fetching profile:', err);

        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) {
        return children;
    }
}
