//
//  ViewController.swift
//  PlanetMystery2
//
//  Created by Jonny on 11/11/20.
//

import Foundation
import UIKit
import SpotSense
import CoreLocation
import UserNotifications

let notificationCenter = UNUserNotificationCenter.current()

let spotsense = SpotSense(clientID: "e4oYaq9268b03eO8LbM7MgMkSRKOQyif", clientSecret: "6WJhvoM2D29SWJZy_8ePHCRiw43pwUGMSHN3bZSvaz_ay_ddVmqtoodZpLoiaICl")

class ViewController: UIViewController, CLLocationManagerDelegate, SpotSenseDelegate {
  
  let locationManager : CLLocationManager = CLLocationManager()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    // get notification permission, only required if sending notifications with SpotSense
    notificationCenter.requestAuthorization(options: [.alert, .sound]) { (granted, error) in
      spotsense.notificationStatus(enabled: granted);
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
  }
  func locationManager(_ manager: CLLocationManager, didEnterRegion region: CLRegion) {
    
    //Will Notify Enter event to dashboard for specific region
    spotsense.handleRegionState(region: region, state: .inside)
  }
  
  func locationManager(_ manager: CLLocationManager, didExitRegion region: CLRegion) {
    
    //Will Notify Exit event to dashboard for specific region
    spotsense.handleRegionState(region: region, state: .outside)
  }
  
  func didFindBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    
    //Will Notify Enter event to dashboard for specific beacon
    spotsense.handleBeaconEnterState(beaconScanner: beaconScanner, beaconInfo: beaconInfo, data: data)
  }
  
  func didLoseBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    
    //Will Notify Exit event to dashboard for specific beacon
    spotsense.handleBeaconExitState(beaconScanner: beaconScanner, beaconInfo: beaconInfo, data: data)
  }
  
  func ruleDidTrigger(response: NotifyResponse, ruleID: String) {
    
  }
  
  func didUpdateBeacon(beaconScanner: SpotSense, beaconInfo: BeaconInfo, data: NSDictionary) {
    
  }
  
  func didObserveURLBeacon(beaconScanner: SpotSense, URL: NSURL, RSSI: Int) {
    
  }
  
}
