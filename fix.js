const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The lines 642 and 643 are:
//                         ))}
//                     </div>
// Let's replace this exact block of text.
const regex = /                        \)\)\}\r?\n                    <\/div>\r?\n/g;
content = content.replace(regex, '');

fs.writeFileSync('src/app/page.tsx', content);
