"use client";
import { redirect } from "next/navigation";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";

export const SearchPanel = ({ channel }: { channel: string }) => {
    const [searchPanelOpen, setSearchPanelOpen] = useState(false);
    const [search, setSearch] = useState("");

    async function onSubmit() {
        // "use server";
        // const search = formData.get("search") as string;
        // if (search && search.trim().length > 0) {
        //     redirect(`/${encodeURIComponent(channel)}/search?query=${encodeURIComponent(search)}`);
        // }
        if (search && search.trim().length > 0) {
            redirect(`/${encodeURIComponent(channel)}/search?query=${encodeURIComponent(search)}`);
        }

    }

    return (
        <div className="flex items-center justify-center" >
            <button
                onClick={() => setSearchPanelOpen(!searchPanelOpen)}
                className="flex items-center p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 group"
            >
                <SearchIcon size={20} />
            </button>
            {searchPanelOpen && (
                <div className={`flex absolute flex-col bg-black bg-opacity-60 top-0 left-0 right-0 h-[100vh] z-10`}
                    onClick={() => setSearchPanelOpen(false)}
                >
                    <div className="flex gap-4 items-center justify-center h-20 bg-blue-500 px-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form
                            action={onSubmit}
                            className="group relative my-2 flex w-full items-center justify-items-center text-md lg:w-[44rem]"
                        >
                            <label className="w-full">
                                <span className="sr-only">search for products</span>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search for products..."
                                    autoComplete="on"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    required
                                    className="h-12 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-md text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"
                                />
                            </label>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button
                                    type="submit"
                                    className="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80"
                                >
                                    <span className="sr-only">search</span>
                                    <SearchIcon aria-hidden className="h-6 w-6" />
                                </button>
                            </div>
                        </form>
                        <X
                            className="cursor-pointer h-10 w-10 text-white  "
                            onClick={() => setSearchPanelOpen(!searchPanelOpen)}
                        />
                    </div>
                </div>

            )}
        </div>
    );
};
