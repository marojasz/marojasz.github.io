$(document).ready(function(){
	$('section.idisp').removeClass('idisp');
	// Func. para añadir Box-shadow en section main
	$('section.main div div').mouseenter(function(){
		div = $(this);
		TweenMax.to(div, .2, {
			// boxShadow: "-300px -100px 200px 60px rgba(0,0,0,0.7) inset"
			boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.7) inset"
		});
	});
	$('section.main div div').mouseleave(function(){
		div = $(this);
		TweenMax.to(div, .2, {
			boxShadow: "0px 0px 200px 200px rgba(0,0,0,0.7) inset"
		});
	});

	// Control de los movimientos sobre sus ejes (TOP,BOTTOM,LEFT,RIGHT)
	$('section.main div div').click(function(){
		id = $(this).attr('class');
		key = $(this).attr('key');
		switch(id){
			case 'img1': 
				moveToSide('section.main','bottom');
				moveToSide('section.'+key,'bottom');
				break;
			case 'img2':
				moveToSide('section.main','left');
				moveToSide('section.'+key,'left-fix');
				break;
			// case 'img3':
			// 	moveToSide('section.main','right');
			// 	break;
			case 'img4':
				moveToSide('section.main','top');
				moveToSide('section.'+key,'top-fix');
				break;		
		}
		
	});
	// Movimiento de contenedores de cada Trabajador.
	$('section.barbers div.container-left div div').click(function(){
		cl = $(this).attr('class');
		if(cl != 'active'){
			$('section.barbers div.container-left div p').addClass('hidden');
			$('section.barbers div.container-left div img').addClass('hidden');
			$(this).find('p').removeClass('hidden');
			$(this).find('img').removeClass('hidden');
		}
		$('section.barbers div.container-left div div').removeClass('active');
		$(this).addClass('active');
		
	});

	// Func. Encapsulada para control de movimientos sobre eje (TOP,BOTTOM,LEFT,RIGHT)
	function moveToSide(element,to){
		switch(to){
			case 'right':
				TweenMax.to(element, .7,{
					opacity: 1,
					right: '100%'
				});
				break;
			case 'left':
				TweenMax.to(element, .7,{
					opacity: 1,
					left: '100%'
				});
				break;
			case 'left-fix':
				TweenMax.to(element, .7,{
					opacity: 1,
					right: '0%',
				});
				break;
			case 'top':
				TweenMax.to(element, .7,{
					opacity: 1,
					top: '100%'
				});
				break;
			case 'top-fix':
				TweenMax.to(element, .7,{
					opacity: 1,
					bottom: '200%'
				});
				break;
			case 'bottom':
				TweenMax.to(element, .7,{
					opacity: 1,
					bottom: '100%'
				});
				break;			
		}
	}
	// Cambiar imagen detalle de galeria para ver mas detalles
	$('section.barbers div.container-right div.preview ul li figure img').click(function(){
		path = $(this).attr('src');
		$('section.barbers div.container-right div.preview ul li figure img').removeClass('active');
		$(this).addClass('active');
		$('section.barbers div.container-right div.detail figure img').attr('src', path);
	});

	// Activar animacion de section.us en mobile version
	$('h1.mobile-menu').click(function(){
		$('h1.mobile-menu').attr('style','');
		p_cl = $(this).parent();
		$('section.us div h1').attr('style','');
		$('section.us div div').attr('style','');
		$('section.us div.'+p_cl[0].className+' h1').attr('style','display:flex');
		$('section.us div.'+p_cl[0].className+' div').attr('style','display:flex');
		if(p_cl[0].className.indexOf('container-left') != -1){
			// $('section.us div.container-right').attr('style','height:14.5%;');
			// $('section.us div.'+p_cl[0].className).attr('style','height:85%;justify-content:center;');
			$('section.us div.container-right').attr('id','short');
			$('section.us div.'+p_cl[0].className).attr('id','large');
		}else{
			// $('section.us div.container-left').attr('style','height:14.5%;');
			// $('section.us div.'+p_cl[0].className).attr('style','height:85%;');
			$('section.us div.container-left').attr('id','short');
			$('section.us div.'+p_cl[0].className).attr('id','large');
		}
		$(this).attr('style','display:none');
	});

});