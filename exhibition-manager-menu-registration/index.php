<?php
/**
 * Plugin Name: DiVino.Taste Exhibition Manager
 * Description: A WordPress plugin that integrates an application for managing DiVino.Taste Exhibition data.
 * Version: 1.0.0
 */

function exhibition_manager_enqueue_material_icons($hook) {
    // Only enqueue on your plugin page
    if ($hook !== 'toplevel_page_exhibition-manager') {
        return;
    }

    wp_enqueue_style(
        'material-icons',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        array(),
        null
    );
}

add_action('admin_enqueue_scripts', 'exhibition_manager_enqueue_material_icons');

function exhibition_manaher_admin_page() {
    $is_dev = getenv('ANGULAR_DEV') ?: false;
    $serve_base_url = 'http://localhost:4200';

    $angular_url = $is_dev ? "$serve_base_url/main.js" : plugin_dir_url( __FILE__ ) . 'dist/main.js';
    
    ?>
    <app-root></app-root>
    <?php if ($is_dev): ?>
        <script src="<?php echo $serve_base_url; ?>/polyfills.js"></script>
    <?php endif; ?>
    <script type="module" src="<?php echo $angular_url; ?>"></script>
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
