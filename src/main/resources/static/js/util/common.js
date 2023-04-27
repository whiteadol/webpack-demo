$(function() {
	/* 툴팁 */
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
	})
	/* 사이드 메뉴 설정 */
	// $('.side-menu').hover(function(){
	// 	$(this).addClass('side-menu-x');
	// });
	// $('.side-menu').mouseleave(function(){
	// 	$(this).removeClass('side-menu-x');
	// 	// 서브 드롭다운 메뉴 숨기기 추가
	// 	$('.side-menu ul li ul').slideUp();
	// 	$('.sub-menu').removeClass('sub-exp');
	// });
	$('.side-menu .sub').click(function(){
		if($(this).hasClass('active')){
			// $(this).find('ul').slideUp();
			$(this).removeClass('active');
		}
		else{
			//$('.side-menu .sub').removeClass('active');
			$(this).addClass('active');
		}
	});
	/* 달력 위치 하단 고정 */
	$( "[id^='datepicker-']" ).datepicker({ 
		weekStart:0,
		language: "ko",
		autoclose: true,
		todayHighlight: true,
		orientation: "bottom auto"
	});
	$( "[id^='datepicker-']" ).focus(function(){ // 달력 위치 조정
		var date_top =$(this).offset().top;
		$('.datepicker-dropdown').css('top', date_top);
	});
	/* 달력 위치 상단 고정 */
	$( "[id^='datepickerTop-']" ).datepicker({ 
		weekStart:0,
		language: "ko",
		autoclose: true,
		todayHighlight: true,
		orientation: "auto auto"
	});
	$( "[id^='datepickerTop-']" ).focus(function(){ // 달력 위치 조정
		var date_top =$(this).offset().top - 270;
		$('.datepicker-dropdown').css('top', date_top);
	});
	
	/* 모달 생성시 스크롤 여백만큼 padding-right 추가 */
	$(document).on('show.bs.modal', function () {
		if($('html').prop('scrollHeight') > $(window).height()){
			$('body').addClass('modal-scroll');
		}
	});
	$(document).on('hidden.bs.modal', function () {
		$('body').removeClass('modal-scroll');
	});

	// 팝오버
	$('[data-bs-toggle="popover"]').popover()
	
});

/* datepicker Ko */
!function(a){a.fn.datepicker.dates.ko={days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],daysShort:["일","월","화","수","목","금","토"],daysMin:["일","월","화","수","목","금","토"],months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthsShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],today:"오늘",clear:"삭제",format:"yyyy-mm-dd",titleFormat:"yyyy년mm월",weekStart:0}}(jQuery);
