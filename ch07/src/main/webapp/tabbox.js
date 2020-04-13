//jQuery 버젼
var tabBox = {

		// 내버전
		_onTabClicked: function() {
			// unselect
			var $liSelecteds = $('.selected');
			if($liSelecteds.length == 1) {
				$liSelecteds.removeClass('selected');
			}

			$(this).attr('class', 'selected');
		},
		
		// 강사님 버전
		_changeTab: function() {
//			var $liSelected = $('.tab-box li.selected');
			var $liTab = null;
			
			$('.tab-box li.selected').removeClass('selected');
			
//			if(this == TabBox) {
//				$liTab = $('.tab-box li:last-child');
//			} else {
//				$liTab = $(this);
//			
//			}
			$liTab = (this == tabBox) ? 
					 $('.tab-box li:last-child') : 
					 $(this);
			
			$('.tab-box div').text("메뉴 " + $liTab.data('no') + "의 탭뷰입니다.");
					 
			$liTab.addClass("selected");
		},

		init: function() {
			$(function() {
				$(".tab-box li:last-child").attr('class', 'selected');
				// $(".tab-box li:last-child").addClass("selected");
//				$(".tab-box li").click(tabBox._onTabClicked);
				$(".tab-box li").click(tabBox._changeTab);
				tabBox._changeTab();
			});
		}
}

