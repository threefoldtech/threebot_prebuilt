
// // import htmlToText from 'html-to-text';
// const sanitize = function (post) {
//     const content = htmlToText.fromString(
//         post,
//         {
//             ignoreImage: true,
//             ignoreHref: true,
//             wordwrap: false,
//             uppercaseHeadings: false
//         }
//     );
//     return content;
// }

const sanitize = (content) => content
export const excerptOf = (content, opts) => {
    opts = opts || { excerptLength: 300, pruneString: '...' };
    opts.excerptLength = opts.excerptLength || 300;
    opts.pruneString = opts.pruneString || '...'
    const post = sanitize(content);
    return post.substr(0, opts.excerptLength) + opts.pruneString;
}


