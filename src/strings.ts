/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "The device doesn't support navigator.mediaDevices , only "
        + "supported cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Camera access is only supported in secure context like https "
        + "or localhost.";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Scan en cours";
    }

    public static idleStatus(): string {
        return "Idle";
    }

    public static errorStatus(): string {
        return "Error";
    }

    public static permissionStatus(): string {
        return "Permission";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Pas de caméra";
    }

    public static lastMatch(decodedText: string): string {
        return `Last Match: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Code Scanner";
    }

    public static cameraPermissionTitle(): string {
        return "Demander autorisation caméra";
    }

    public static cameraPermissionRequesting(): string {
        return "Nous demandons l'autorisation...";
    }

    public static noCameraFound(): string {
        return "Pas de caméra trouvée";
    }

    public static scanButtonStopScanningText(): string {
        return "Arreter le scan";
    }

    public static scanButtonStartScanningText(): string {
        return "Démarrer le scan";
    }

    public static scanButtonScanningStarting(): string {
        return "Lancement de la caméra...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Scanner une image";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Scanner en utilisant directement la camera";
    }

    public static selectCamera(): string {
        return "Choisir Camera";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static builtUsing(): string {
        return "Built using ";
    }

    public static reportIssues(): string {
        return "Report issues";
    }
}
