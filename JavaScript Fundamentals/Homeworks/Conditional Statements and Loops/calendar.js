"use strict";

function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let html = '',
        currentDate = new Date(year, month - 1, day),
        firstDay = new Date(year, month-1, 1),
        firstDayOfCalendar = new Date(firstDay),
        lastDayOfCalendar = new Date(firstDay);

    firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfCalendar.getDay());
    lastDayOfCalendar.setMonth(lastDayOfCalendar.getMonth() + 1);
    lastDayOfCalendar.setDate(0);

    lastDayOfCalendar.setDate(lastDayOfCalendar.getDate() + 6 - lastDayOfCalendar.getDay());

    html += '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    for (let i = firstDayOfCalendar; i <= lastDayOfCalendar; i.setDate(i.getDate() + 1)) {
        if (i.getDay() == 0) {
            html += '  <tr>';
        }

        if (i.getFullYear() < firstDay.getFullYear() || (i.getMonth() < firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear())) {
            html += `<td class="prev-month">${i.getDate()}</td>`;
        } else if (i.getFullYear() > firstDay.getFullYear() || (i.getMonth() > firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear())) {
            html += `<td class="next-month">${i.getDate()}</td>`;
        } else if (i.getTime() === currentDate.getTime()) {
            html += `<td class="today">${i.getDate()}</td>`;
        } else {
            html += `<td>${i.getDate()}</td>`
        }

        if (i.getDay() == 6) {
            html += '</tr>\n';
        }
    }
    html += '</table>';

    return html;
}
