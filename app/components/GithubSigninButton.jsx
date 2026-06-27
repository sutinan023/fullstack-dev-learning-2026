"use client"
import { signInWithGithub } from '@/libs/authentication'
import { useEffect, useState } from 'react'
import { getUser, signOut } from '@/libs/authentication'

export default function GithubSignInButton() {
    const className = {
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
    }
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser().then(res => setUser(res))
    }, [])

    async function handleSignIn() {
        await signInWithGithub()
    }

    async function handleSignOut() {
        await signOut()
        setUser(null)
    }

    return (
        <div>
            {
                user ?
                    (<button
                        className={className.button}
                        onClick={handleSignOut}>
                        Logout
                    </button >
                    ) : (
                        <button
                            className={className.button}
                            onClick={handleSignIn}>
                            Login with Github
                        </button>
                    )
            }
        </div>

    )
}
