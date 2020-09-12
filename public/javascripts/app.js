
$('.class-tab').click((e) => {
    e.preventDefault();
    $('.class-tab').addClass('grade-tab-active')
    $('.class-content').show()

    $('.word-tab').removeClass('grade-tab-active')
    $('.word-content').hide()
})
$('.word-tab').click((e) => {
    e.preventDefault();
    $('.class-tab').removeClass('grade-tab-active')
    $('.class-content').hide()
    $('.word-tab').addClass('grade-tab-active')
    $('.word-content').show()
})
$('.profile-all-tab').click((e) => {
    e.preventDefault();
    $('.profile-all').show()
    $('.profile-all-tab div').addClass('profile-subtab-active')
    $('.profile-password-tab div').removeClass('profile-subtab-active')
    $('.profile-payment-tab div').removeClass('profile-subtab-active')
    $('.profile-password').hide()
    $('.profile-payment').hide()
})

$('.profile-password-tab').click((e) => {
    e.preventDefault();
    $('.profile-password').show()
    $('.profile-password-tab div').addClass('profile-subtab-active')
    $('.profile-all-tab div').removeClass('profile-subtab-active')
    $('.profile-payment-tab div').removeClass('profile-subtab-active')
    $('.profile-all').hide()
    $('.profile-payment').hide()
})
$('.profile-payment-tab').click((e) => {
    e.preventDefault();
    $('.profile-payment').show()
    $('.profile-payment-tab div').addClass('profile-subtab-active')
    $('.profile-all-tab div').removeClass('profile-subtab-active')
    $('.profile-password-tab div').removeClass('profile-subtab-active')
    $('.profile-all').hide()
    $('.profile-password').hide()
})
$('.user-settings').click((e) => {
    e.preventDefault();
    // Show expamded navigation
    console.log('user Icon Clicked');
    $('.user-settings-expanded').toggleClass('user-settings-expanded-active');

})
$('.login-form').submit((e)=>{
    let phone=$('#phone').val();
    let password=$('#password').val();
    if(!phone ){
        e.preventDefault();
        $('#phone').addClass(' is-invalid')
    }else{
        $('#phone').removeClass(' is-invalid')
    }
    if(!password){
        e.preventDefault();
        $('#password').addClass(' is-invalid')
    }else{
        $('#password').removeClass(' is-invalid')
    }
})

$('.register-form').submit((e)=>{
    let phone=$('#phone').val();
    let password=$('#password').val();
    if(!phone ){
        e.preventDefault();
        $('#phone').addClass(' is-invalid')
    }
    if(!password){
        e.preventDefault();
        $('#password').addClass(' is-invalid')
    }else{
        $('#password').removeClass(' is-invalid')
    }
})
$('#phone').keyup(()=>{
    $('#phone').removeClass(' is-invalid')
})

const max_chars = 11;
$('#phone').keydown( function(e){
    if ($(this).val().length >= max_chars) {
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#phone').keyup( function(e){
    if ($(this).val().length >= max_chars) {
        $(this).val($(this).val().substr(0, max_chars));
    }
});
$("#phone").on("keypress keyup blur",function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});