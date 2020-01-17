// $('#calendar').fullCalendar({
//   //ヘッダーの設定
//   header: {
//       //それぞれの位置に設置するボタンやタイトルをスペース区切りで指定できます。指定しない場合、非表示にできます。
//       // 'title'→月・週・日のそれぞれの表示に応じたタイトル
//       // 'prev'→前へボタン
//       // 'next'→次へボタン
//       // 'today'→当日表示ボタン
//       left: 'today prev', //左側に配置する要素
//       center: 'title', //中央に配置する要素
//       right: 'next' //右側に配置する要素
//   },

//   height: 960, //高さをピクセルで指定
//   defaultView: 'agendaDay', //初めの表示内容を指定　内容はこちらを参照→ http://fullcalendar.io/docs/views/Available_Views/
//   aditable: true, //trueでスケジュールを編集可能にする
//   allDaySlot: false,　//falseでagendaDay表示のときに全日の予定欄を非表示にする

//   // 月や曜日を日本語に変更
//   monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
//     monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
//     dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
//     dayNamesShort: ['日','月','火','水','木','金','土'],

//   //時間の表示フォーマットを指定する　指定方法はこちらを参照→http://momentjs.com/docs/#/displaying/format/
//   timeFormat: {
//       agenda: 'h(:mm)'
//   },
//   slotEventOverlap: false, //スケジュールが重なったとき、重ねて表示するかどうか（falseにすると、重ねずに表示する）
//   axisFormat: 'H:mm', //時間軸に表示する時間の表示フォーマットを指定する(ヒョジ方法はtimeFormatと同じ)
//   slotDuration: '01:00:00', //表示する時間軸の細かさ
//   snapDuration: '01:00:00', //スケジュールをスナップするときの動かせる細かさ
//   minTime: "00:00:00", //スケジュールの開始時間
//   maxTime: "24:00:00", //スケジュールの最終時間
//   defaultTimedEventDuration: '01:00:00', //画面上に表示する初めの時間(スクロールされている場所)

//   // イベントをクリックしたときに実行
//   eventClick: function(event) {
//     /* 引数
//     ・event(イベントの開始終了日時なの情報)
//     ・allDay(全日をクリックしたかどうか全日の場合はtrue)
//     ・jsEvent(座標などjsの情報)
//      */
//   },

//   //イベントじゃないところをクリックしたとき(日をクリックしたとき)に実行
//   dayClick: function(date){
//     /* 引数
//     ・date(slotの依存する日付)
//     ・allDay(全日をクリックしたかどうか全日の場合はtrue)
//     ・jsEvent(座標などjsの情報)
//     ・view(カレンダータイトルや表示モードの情報)
//      */
//   },

//   // 登録してある予定(イベント)の上をマウスが通過した際の処理を記述できます
//   eventMouseover: function(){
//     /*引数
//     ・event(イベントの開始終了日時なの情報)
//     ・allDay(全日をクリックしたかどうか全日の場合はtrue)
//     ・jsEvent(座標などjsの情報)
//     */
//   },

//   // 登録してある予定(イベント)の上からマウスが離れた際の処理を記述できます
//   eventMouseout: function(){
//     /* 引数
//     ・event(イベントの開始終了日時なの情報)
//     ・allDay(全日をクリックしたかどうか全日の場合はtrue)
//     ・jsEvent(座標などjsの情報)
//     */
//   },

//   // 予定表のslotをクリックした際の処理を記述できます
//   select: function(){
//     /*引数
//     ・startDate(slotの開始日付)
//     ・endDate(slotの終了日付)
//     ・allDay(全日をクリックしたかどうか全日の場合はtrue)
//     ・jsEvent(座標などjsの情報)
//     ・view(カレンダータイトルや表示モードの情報)
//      */
//   },

//   // イベント(予定)毎の描画時の処理を記述できます
//   eventRender: function(){
//     /* 引数
//     ・event(イベントの開始終了日時なの情報)
//     ・element(イベントのhtml要素情報)
//     */
//   },

//   // カレンダー表記時(ページング等)毎の描画時の処理を記述できます
//   viewRender : function(){
//     /*
//     ・view(カレンダータイトルや表示モードの情報)
//     ・element(html要素情報)
//      */
//   },

//   droppable: true, //外部要素からのドラッグアンドドロップを可にする
//   drop: function(date){ //外部要素からドラッグアンドドロップしたときに実行

//   },
//   eventDragStop: { //カレンダー上にドラッグし終わったときに実行

//   },

//   // イベントをドラッグ＆ドロップ（予定の変更）後に呼ばれる
//   eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
//   },

//   //カレンダーを再描画
//   $('#calendar').fullCalendar('rendar');

//   //カレンダーを削除
//   $('#calendar').fullCalendar('destroy');

//   //イベントを追加
//   $('#calendar').fullCalendar('renderEvent', event, true); //eventはeventオブジェクト

//   //イベントを更新
//   $('#calendar').fullCalendar('updateEvent', event);

// });
$(document).ready(function() {
  var select = function(start, end, allDay) {
      var title = window.prompt("title");
      var data = {event: {title: title,
                          start: start.format(),
                          end: end.format(),
                          allDay: allDay}};
      $.ajax({
          type: "POST",
          url: "/events",
          data: data,
          success: function() {
              calendar.fullCalendar('refetchEvents');
          }
      });
      calendar.fullCalendar('unselect');
  };

  var calendar = $('#calendar').fullCalendar({
      events: '/events.json',
      selectable: true,
      selectHelper: true,
      ignoreTimezone: false,
      select: select
  });
});
$(document).ready(function() {

  var select = function(start, end) {
    var title = window.prompt("title");
    start_time = start.unix()
    var d = new Date( start_time * 1000 );
    var year = d.getYear() + 1900;
    var month = d.getMonth() + 1;
    var day   = d.getDate();
    var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
    var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
    var moment_start = year+"-"+month+"-"+day+" "+hour+":"+min;
    var start_time = moment(moment_start).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
    end_time = end.unix()
    var d = new Date( end_time * 1000 );
    var year = d.getYear() + 1900;
    var month = d.getMonth() + 1;
    var day   = d.getDate();
    var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
    var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
    var moment_end = year+"-"+month+"-"+day+" "+hour+":"+min;
    var end_time = moment(moment_end).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
    var data = {
      event: {
        title: title,
        start: start_time,
        end: end_time,
        allday: false
      }
    }
    $.ajax({
     type: "POST",
     url: "/api/v1/events",
     data: data,
     success: function() {
       calendar.fullCalendar('refetchEvents');
     }
    });
    calendar.fullCalendar('unselect');
  };
  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    axisFormat: 'H:mm',
    timeFormat: 'H:mm',
    monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
    monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    events: "/api/v1/events",
    editable: true,        // 編集可
    selectable: true,      // 選択可
    selectHelper: true,    // 選択時にプレースホルダーを描画
    ignoreTimezone: false, // 自動選択解除
    select: select,        // 選択時に関数にパラメータ引き渡す
    buttonText: {
      prev:     '<',   // &lsaquo;
      next:     '>',   // &rsaquo;
      prevYear: '<<',  // &laquo;
      nextYear: '>>',  // &raquo;
      today:    '今日',
      month:    '月',
      week:     '週',
      day:      '日'
    },
    height: 800,                           // 高さ
    defaultView: 'agendaWeek',             // 初期表示ビュー
    eventLimit: true,                      // allow "more" link when too many events
    firstDay: 0,                           // 最初の曜日, 0:日曜日
    weekends: true,                        // 土曜、日曜を表示
    weekMode: 'fixed',                     // 週モード (fixed, liquid, variable)
    weekNumbers: false,                    // 週数を表示
    slotDuration: '00:30:00',              // 表示する時間軸の細かさ
    snapDuration: '00:15:00',              // スケジュールをスナップするときの動かせる細かさ
    minTime: "00:00:00",                   // スケジュールの開始時間
    maxTime: "24:00:00",                   // スケジュールの最終時間
    defaultTimedEventDuration: '10:00:00', // 画面上に表示する初めの時間(スクロールされている場所)
    allDaySlot: false,                     // 終日スロットを非表示
    allDayText:'allday',                   // 終日スロットのタイトル
    slotMinutes: 15,                       // スロットの分
    snapMinutes: 15,                       // 選択する時間間隔
    firstHour: 9,                          // スクロール開始時間
    eventClick: function(event) { //イベントをクリックしたときに実行
      var id = event.id
      var show_url = "/events/"+id
      location.href = show_url;
    },
    eventResize: function(event) { //イベントをサイズ変更した際に実行
      var id = event.id
      var update_url = "/api/v1/events/"+id
      var event_start_time = event._start._d
      var year = event_start_time.getYear() + 1900;
      var month = event_start_time.getMonth() + 1;
      var day   = event_start_time.getDate();
      var hour  = ( event_start_time.getHours()   < 10 ) ? '0' + event_start_time.getHours()   : event_start_time.getHours();
      var min   = ( event_start_time.getMinutes() < 10 ) ? '0' + event_start_time.getMinutes() : event_start_time.getMinutes();
      var moment_start = year+"-"+month+"-"+day+" "+hour+":"+min;
      var start_time = moment(moment_start).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
      var event_end_time = event._end._d
      var year = event_end_time.getYear() + 1900;
      var month = event_end_time.getMonth() + 1;
      var day   = event_end_time.getDate();
      var hour  = ( event_end_time.getHours()   < 10 ) ? '0' + event_end_time.getHours()   : event_end_time.getHours();
      var min   = ( event_end_time.getMinutes() < 10 ) ? '0' + event_end_time.getMinutes() : event_end_time.getMinutes();
      var moment_end = year+"-"+month+"-"+day+" "+hour+":"+min;
      var end_time = moment(moment_end).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
      var data = {
        event: {
          title: event.title,
          start: start_time,
          end: end_time,
          allday: false
        }
      }
      $.ajax({
       type: "PATCH",
       url: update_url,
       data: data,
       success: function() {
         calendar.fullCalendar('refetchEvents');
       }
      });
      calendar.fullCalendar('unselect');
    },
    eventDrop: function(event) { //イベントをドラッグ&ドロップした際に実行
      var id = event.id
      var update_url = "/api/v1/events/"+id
      var event_start_time = event._start._d
      var year = event_start_time.getYear() + 1900;
      var month = event_start_time.getMonth() + 1;
      var day   = event_start_time.getDate();
      var hour  = ( event_start_time.getHours()   < 10 ) ? '0' + event_start_time.getHours()   : event_start_time.getHours();
      var min   = ( event_start_time.getMinutes() < 10 ) ? '0' + event_start_time.getMinutes() : event_start_time.getMinutes();
      var moment_start = year+"-"+month+"-"+day+" "+hour+":"+min;
      var start_time = moment(moment_start).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
      var event_end_time = event._end._d
      var year = event_end_time.getYear() + 1900;
      var month = event_end_time.getMonth() + 1;
      var day   = event_end_time.getDate();
      var hour  = ( event_end_time.getHours()   < 10 ) ? '0' + event_end_time.getHours()   : event_end_time.getHours();
      var min   = ( event_end_time.getMinutes() < 10 ) ? '0' + event_end_time.getMinutes() : event_end_time.getMinutes();
      var moment_end = year+"-"+month+"-"+day+" "+hour+":"+min;
      var end_time = moment(moment_end).add(-9, 'hour').format("YYYY-MM-DD HH:mm");
      var data = {
        event: {
          title: event.title,
          start: start_time,
          end: end_time,
          allday: false
        }
      }
      $.ajax({
       type: "PATCH",
       url: update_url,
       data: data,
       success: function() {
         calendar.fullCalendar('refetchEvents');
       }
      });
      calendar.fullCalendar('unselect');
    }
  });
});