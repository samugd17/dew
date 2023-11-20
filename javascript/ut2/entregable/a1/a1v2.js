
function multiply(n1) {
    var s1 = ["s1-1", "s1-2", "s1-3", "s1-4", "s1-5", "s1-6", "s1-7", "s1-8", "s1-9", "s1-10"];
    var res;

    document.write('<table class="table">')
    for (let i = 1; i < 11; i++) {
        res = n1 * i;
        document.write(<tr>
                            <td class="operation">n1 * i</td>
                            <td class="result" id='s1[i]'>res</td>
                       </tr>)
    }
    document.write('</table>')
}