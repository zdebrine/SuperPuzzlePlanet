//
//  AppDelegate.swift
//  PlanetMystery2
//
//  Created by Jonny on 11/11/20.
//

import Foundation
import SpotSense
import CoreLocation
import UserNotifications

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, CLLocationManagerDelegate, SpotSenseDelegate {
  func ruleDidTrigger(response: NotifyResponse, ruleID: String) {
    
  }
  
  func didFindBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    spotsense.handleBeaconEnterState(beaconScanner: beaconScanner, beaconInfo: beaconInfo, data: data)
  }
  
  func didLoseBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    //Will Notify Exit event to dashboard for specific beacon
           spotsense.handleBeaconExitState(beaconScanner: beaconScanner, beaconInfo: beaconInfo, data: data)
  }
  
  func didUpdateBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    
  }
  
  func didObserveURLBeacon(beaconScanner: SpotSense, URL: NSURL, RSSI: Int) {
    
  }
  
  func locationManager(_ manager: CLLocationManager, didEnterRegion region: CLRegion) {

          //Will Notify Enter event to dashboard for specific region
          spotsense.handleRegionState(region: region, state: .inside)
      }
          
      func locationManager(_ manager: CLLocationManager, didExitRegion region: CLRegion) {
          
          //Will Notify Exit event to dashboard for specific region
          spotsense.handleRegionState(region: region, state: .outside)
      }
  
  var window: UIWindow?
  var bridge: RCTBridge!
  
  let notificationCenter = UNUserNotificationCenter.current()

  let spotsense = SpotSense(clientID: "e4oYaq9268b03eO8LbM7MgMkSRKOQyif", clientSecret: "6WJhvoM2D29SWJZy_8ePHCRiw43pwUGMSHN3bZSvaz_ay_ddVmqtoodZpLoiaICl")
  
  let locationManager : CLLocationManager = CLLocationManager()
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let jsCodeLocation: URL
    
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "PlanetMystery2", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    
    // get notification permission, only required if sending notifications with SpotSense
    notificationCenter.requestAuthorization(options: [.alert, .sound]) { (granted, error) in
      self.spotsense.notificationStatus(enabled: granted);
    }
    // get location permissions
    locationManager.delegate = self
    locationManager.activityType = .automotiveNavigation
    locationManager.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
    locationManager.distanceFilter = 5.0
    locationManager.requestAlwaysAuthorization()
    locationManager.startUpdatingLocation()
    spotsense.delegate = self; // attach spotsense delegate to self
    
    if (CLLocationManager.authorizationStatus() == .authorizedAlways || CLLocationManager.authorizationStatus() == .authorizedWhenInUse) {
      if CLLocationManager.isMonitoringAvailable(for: CLCircularRegion.self) { // Make sure region monitoring is supported.
        
      }
    }
    spotsense.delegate = self; // attach spotsense delegate to self
    
    return true
  }
}
