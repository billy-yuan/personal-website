export class FormatDate {
  static format(dateString: string, language: string) {
    if (language === "ja") {
      return this._formatDateJA(dateString);
    }
    return this._formatDateEN(dateString);
  }

  static _formatDateEN(dateString: string) {
    const dateObject = this._toDateObject(dateString, "en");
    return dateObject.year + "-" + dateObject.month + "-" + dateObject.day;
  }

  static _formatDateJA(dateString: string) {
    const dateObject = this._toDateObject(dateString, "ja");
    return `${dateObject.year}年${dateObject.month}月${dateObject.day}日`;
  }

  static _toDateObject(dateString: string, language: string) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();

    let formattedDate = { year, month: month.toString(), day: day.toString() };

    if (language === "ja") {
      return formattedDate;
    }
    if (day < 10) {
      formattedDate = { ...formattedDate, day: "0" + day };
    }
    if (month < 10) {
      formattedDate = { ...formattedDate, month: "0" + month };
    }
    return formattedDate;
  }
}

export function url(address: string): string {
  return `url('${address}')`;
}

export function isMobile(): boolean {
  return window.matchMedia("screen and (max-width: 760px)").matches;
}
