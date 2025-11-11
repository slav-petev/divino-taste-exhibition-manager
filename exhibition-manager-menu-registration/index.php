<?php
/**
 * Plugin Name: DiVino.Taste Exhibition Manager
 * Description: A WordPress plugin that integrates an application for managing DiVino.Taste Exhibition data.
 * Version: 1.0.0
 */

function exhibition_manaher_admin_page() {
    ?>
    <p>Plugin Works</p>
    <?php
}

function exhibiton_manager_plugin_menu() {
    add_menu_page(
        'Exhibition Manager',
        'Exhibiton Manager',
        'manage_options',
        'exhibition-manager',
        'exhibition_manaher_admin_page'
    );
}

add_action('admin_menu', 'exhibiton_manager_plugin_menu');
