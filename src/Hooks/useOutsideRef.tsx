import { useEffect, useState, useRef } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */

const useOutsideRef = (initialVisible: boolean) => {
    const [isVisible, setIsVisible] = useState<boolean>(initialVisible)
    const ref = useRef<HTMLDivElement>(null)

    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside, true)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside, true)
        }
    }, [ref])

    return { ref, isVisible, setIsVisible }
}

export { useOutsideRef }
