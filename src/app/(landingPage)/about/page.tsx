export default function About() {
    return (
        <div className="py-6 px-4 sm:px-8 md:px-16 flex mt-6 flex-col items-center gap-4 justify-center">
            <span className="text-[var(--primary)] text-sm sm:text-base">
                Features
            </span>
            <div className="text-2xl md:text-3xl text-center">
                Dashboards that feels like it’s from the future
            </div>

            <div className="w-full sm:w-[600px] md:w-[768px] text-center font-light text-base sm:text-lg">
                Powerful, self-serve energy and network analytics to help
                you monitor, optimize, and scale your operations. Trusted
                by leading utilities and energy providers.
            </div>
        </div>
    )
}
