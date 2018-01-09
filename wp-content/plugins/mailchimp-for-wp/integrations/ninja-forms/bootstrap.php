<?php

mc4wp_register_integration( 'ninja-forms', 'MC4WP_Ninja_Forms_Integration', true );

<<<<<<< HEAD
if( class_exists( 'Ninja_Forms' ) && method_exists( 'Ninja_Forms', 'instance' ) ) {
    $ninja_forms = Ninja_Forms::instance();

    if( isset( $ninja_forms->fields ) ) {
        $ninja_forms->fields['mc4wp_optin'] = new MC4WP_Ninja_Forms_Field();
    }

    if( isset( $ninja_forms->actions ) ) {
        $ninja_forms->actions['mc4wp_subscribe'] = new MC4WP_Ninja_Forms_Action();
    }
}
=======
function _mc4wp_ninja_forms_register_field( $fields ) {
    $fields['mc4wp_optin'] = new MC4WP_Ninja_Forms_Field();
    return $fields;
}

function _mc4wp_ninja_forms_register_action( $actions ) {
    $actions['mc4wp_subscribe'] = new MC4WP_Ninja_Forms_Action();
    return $actions;
}

add_filter( 'ninja_forms_register_fields', '_mc4wp_ninja_forms_register_field' );
add_filter( 'ninja_forms_register_actions', '_mc4wp_ninja_forms_register_action' );
>>>>>>> origin/master
