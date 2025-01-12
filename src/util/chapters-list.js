import React from "react";
import * as meta from "../../meta.json";
import toTitleCase from "titlecase";

const chaptersList = meta.chapters.map((chapter) => {
    const link = `/chapters/${chapter}`;
    const title = toTitleCase(chapter.replace(/-/g, " "));

    return (
        <li key={link}>
            <a href={link}>{title}</a>
        </li>
    );
});

export default (
    <ol start="0" className="chapter-list">
        {chaptersList}
    </ol>
);
